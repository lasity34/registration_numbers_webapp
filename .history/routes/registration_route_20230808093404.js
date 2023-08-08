

export default function registration_route(registrationService) {

   async function add(req, res) {
       await registrationService.insert_registration_number(req.body.name) 

        // req.flash("info", )
        res.redirect("/reg_numbers")
    }

    async function show(req, res) {
        
        const town = req.body.town;
        
        let reg_num;
        if (town && town !== 'all') {
            reg_num = await registrationService.get_registration_numbers_by_town(town);
        } else {
            reg_num = await registrationService.get_all_registration_numbers()
        }
        res.render("index", {
            reg_num: reg_num
        })
    }

    return {
        show,
        add
    }

}

// async function add(req, res) {
//     await greetingService.setLanguage(req.body.language);
//     const message = await greetingService.greetMessage(req.body.name);

//     req.flash("info", message);
//     res.redirect("/");
//   }

//   async function show (req, res)  {
//     const flashMessage = req.flash("info")[0]
//     const count = await greetingService.getCount()
//     res.render("index", {
//       flashMessage: flashMessage,
//       count: count,
//     });
//   }

//   async function reset (req, res) {
//     greetingService.reset();
//     res.redirect("/");
//   }
