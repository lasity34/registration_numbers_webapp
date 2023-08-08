

export default function registration_service(db) {


    let message = "";


    async function get_town_id_by_prefix(prefix) {
        try {
            const result = await db.oneOrNone('SELECT id FROM registration_project.towns WHERE name = $1', [prefix])
            return result.id
        } catch (error) {
           
            console.error("Failed to get town ID by prefix", error);
          }
    }

   async function insert_registration_number(registration_number) {

        const upperCaseRegistrationNumber = registration_number.toUpperCase();

        const prefix = upperCaseRegistrationNumber.substring(0, 2)
        const town_id = await get_town_id_by_prefix(prefix)

        if (!/^C[ACL][0-9]+$/.test(upperCaseRegistrationNumber)) {
            message = "Invalid registration number"
            console.error("Invalid registration number:", registration_number);
            return; 
        }

        const existingRegistration = await db.oneOrNone('SELECT * FROM registration_project.registration WHERE registration_number = $1', [upperCaseRegistrationNumber]);
        if (existingRegistration) {
            message = "Registration number already exists";
            console.error("Registration number already exists:", registration_number);
            return; // or handle differently
        }

        try {
            const result = await db.none('INSERT INTO registration_project.registration (registration_number, town_id) VALUES ($1, $2)', [upperCaseRegistrationNumber, town_id])
            return result
        } catch (error) {
            console.error("Failed to insert registration number", error);

        }
    }

       
     
    async function get_all_registration_numbers() {
        try {
            const result = await db.any('SELECT * FROM registration_project.registration')
            return result
        } catch (error) {
            console.error("Failed to insert registration number", error);

        }
    }

    function getMessage() {
        return message
    }

    return {
        insert_registration_number,
        get_all_registration_numbers,
        getMessage
    }
}


