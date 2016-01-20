$("./body") {
  $(".//div[@id='Footer']") {

    add_class("mw-footer")
    text("")

    insert_at("top", "p", "All prices are in USD")
    insert_at("bottom", "p", "Copyright 2013 iGadgetCommerce")

    insert_at("bottom", "div", "powered by:", class: "mw_pwd_by")
    insert_at("bottom", "div", class: "mw_logo sprites-moovweb")
    
  }
}
