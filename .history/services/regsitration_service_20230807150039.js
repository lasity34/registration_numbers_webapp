

export default function registration_service(db) {

   async function get_registration_number(registration_number, town_id) {

        try {
            const result = await db.none(' INSERT INTO registration_project.registration (registration_number, town_id) VALUES ($1, $2)', [registration_number, town_id])
        } catch (error) {
            console.error("Failed to insert registration number", error);
//         throw error;
        }



    }

    return {
        get_registration_number
    }
}


