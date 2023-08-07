

    async function get_town_id_by_prefix(prefix) {
        try {
            const result = await db.one('SELECT id FROM registration_project.towns WHERE name = $1', [prefix])
            return result
        }
    }