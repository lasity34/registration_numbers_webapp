

export default function registration_service(db) {

   async function insert_registration_number(registration_number, town_id) {

        const prefix = registration_number.substring(0, 2)

        try {
            const result = await db.none(' INSERT INTO registration_project.registration (registration_number, town_id) VALUES ($1, $2)', [registration_number, town_id])
            return result
        } catch (error) {
            console.error("Failed to insert registration number", error);

        }



    }

    return {
        insert_registration_number
    }
}


