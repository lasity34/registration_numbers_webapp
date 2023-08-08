export default function registration_route(registrationService) {
  async function add(req, res) {
    const action = req.body.action;

    if (action === "add") {
      await registrationService.insert_registration_number(req.body.name);
      const message = registrationService.getMessage();
      if (message) {
        req.flash("info", message);
      }
      res.redirect("/reg_numbers");
    } else if (action === "filter") {
      const town = req.body.town;
      res.redirect(`/reg_numbers?town=${town}`);
    }
  }

  async function show(req, res) {
    const town = req.query.town;

    let reg_num;
    if (town && town !== "all") {
      reg_num = await registrationService.get_registration_numbers_by_town(
        town
      );
    } else {
      reg_num = await registrationService.get_all_registration_numbers();
    }

    const messages = req.flash("info");

    res.render("index", {
      reg_num: reg_num,
      town: town,
      messages: messages,
    });
  }


 async function get(req, res) {

    const registrationNumber = req.params.registration;

    const registration = await registrationService.get_by_registration_number();

    res.render("registration",{
        registration: registration
    }
    
    )

  }

  return {
    show,
    add,
    get
  };
}
