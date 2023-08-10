export default function registration_service(db) {
  let message = { text: "", valid: false };

  async function get_town_id_by_prefix(prefix) {
    try {
      const result = await db.oneOrNone(
        "SELECT id FROM registration_project.towns WHERE name = $1",
        [prefix]
      );
      if (result) {
        return result.id;
      } else {
        message = { text: "Town not valid", valid: false };
        return null;
      }
    } catch (error) {
      console.error("Failed to get town ID by prefix", error);
      return null;
    }
  }

  async function insert_registration_number(registration_number) {
    if (!registration_number || registration_number.trim() === "") {
      message = {text:"Registration number cannot be blank", valid: false};
      console.error("Blank registration number");
      return;
    }

    const upperCaseRegistrationNumber = registration_number.toUpperCase();

    const prefix = upperCaseRegistrationNumber.substring(0, 2);
    const town_id = await get_town_id_by_prefix(prefix);

    const cleanedRegistrationNumber = upperCaseRegistrationNumber.replace(/\s+/g, ''); // Remove white space

    if (!/^C[AJL][-0-9]{1,8}$/.test(cleanedRegistrationNumber) || cleanedRegistrationNumber.length > 9) {
      message = { text: "Invalid registration number", valid: false };
      console.error(
        "Invalid registration number:",
        cleanedRegistrationNumber
      );
      return;
    }
    

    const existingRegistration = await db.oneOrNone(
      "SELECT * FROM registration_project.registration WHERE registration_number = $1",
      [upperCaseRegistrationNumber]
    );
    if (existingRegistration) {
      message = {text: "Registration number already exists", valid: false};
      console.error(
        "Registration number already exists:",
        upperCaseRegistrationNumber
      );
      return; // or handle differently
    }

    try {
      await db.none(
        "INSERT INTO registration_project.registration (registration_number, town_id) VALUES ($1, $2)",
        [upperCaseRegistrationNumber, town_id]
      );
      message = { text: "Registration number inserted successfully", valid: true }; // Valid case
    } catch (error) {
      message = { text: "Failed to insert registration number", valid: false }; // Error case
      console.error(error);
    }
  }

  async function get_registration_numbers_by_town(town) {
    try {
      const result = await db.any(
        "SELECT * FROM registration_project.registration WHERE registration_number LIKE $1",
        [town + "%"]
      );
      return result;
    } catch (error) {
      console.error("Failed to get registration numbers by town", error);
      return []; // Return an empty array in case of an error
    }
  }

  async function get_all_registration_numbers() {
    try {
      const result = await db.any(
        "SELECT * FROM registration_project.registration"
      );
      return result;
    } catch (error) {
      console.error("Failed to get registration numbers", error);
      return []; // Return an empty array in case of an error
    }
  }

  async function get_by_registration_number(registration_number) {
    try {
      const result = await db.oneOrNone(
        "SELECT * FROM registration_project.registration WHERE registration_number = $1",
        [registration_number]
      );
      return result;
    } catch (error) {
      console.error("Failed to get registration by number", error);
      return null;
    }
  }

  function getMessage() {
    return message;
  }

  async function reset() {
    message = ""
    try {
      await db.none('DELETE FROM registration_project.registration')
    }
    catch (err) {
      console.error(err)
    }
  }


  return {
    insert_registration_number,
    get_all_registration_numbers,
    getMessage,
    get_registration_numbers_by_town,
    get_by_registration_number,
    reset
  };
}
