

export default function registration_route(registrationService) {

   async function add(req, res) {
       const action = req.body.action;

       if (action === "add") {
        await registrationService.insert_registration_number(req.body.name) 
        res.redirect("/reg_numbers")
       } else if (action === 'filter') {
        const town = req.body.town
        res.redirect(`/reg_numbers?town=${town}`)
       }

        // req.flash("info", )
      
    }

    async function show(req, res) {
        
        const town = req.query.town;
        
        let reg_num;
        if (town && town !== 'all') {
            reg_num = await registrationService.get_registration_numbers_by_town(town);
        } else {
            reg_num = await registrationService.get_all_registration_numbers()
        }
        res.render("index", {
            reg_num: reg_num,
            town: town
        })
    }

    return {
        show,
        add
    }

}
