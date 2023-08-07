

export default function registration_service(db) {

   async function insert_registration_number(registration_number) {

        const prefix = registration_number.substring(0, 2)
        const tonw_id = await get_town_id_by_prefix(prefix)

        try {
            const result = await db.none('INSERT INTO registration_project.registration (registration_number, town_id) VALUES ($1, $2)', [registration_number, town_id])
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

    return {
        insert_registration_number,
        get_all_registration_numbers
    }
}


