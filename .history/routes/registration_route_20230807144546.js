

export default function registration_route() {

    function add(req, res) {

        
        res.redirect("/")
    }

    function show(req, res) {
        res.render("index")
    }

    return {
        show
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
