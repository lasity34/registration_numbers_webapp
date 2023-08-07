

export default function registration_route() {


    function show() {
        res.render("index")
    }

    return {
        show
    }

}




// async function show (req, res)  {
//     const flashMessage = req.flash("info")[0]
//     const count = await greetingService.getCount()
//     res.render("index", {
//       flashMessage: flashMessage,
//       count: count,
//     });
//   }