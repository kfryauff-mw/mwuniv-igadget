# Place holder/example file
$$("body") {
  # Add class for page-specific styling
  add_class("_home")

  $(".//div[@id='Wrapper']") {
    remove("./div[@class='Left']")
    remove("./div[@class='Right']")

    $("./div[@class='Content']") {
      $(".//h2") {
        remove("./span")
      }
      $(".//ul[@class='ProductList']") {

        attribute("data-ur-carousel-component", "scroll_container")
        $("./li") {
          attribute("data-ur-carousel-component", "item")
          attribute("alt", index())

          # Hacky fix for carousel
          add_class("carousel_fix")
        }
        wrap("div", data-ur-set: "carousel", data-ur-fill: "2", data-ur-infinite: "disabled", data-ur-center: "disabled")
        $("parent::node()") {
          insert_at("bottom", "div", class: "dots", data-ur-carousel-component: "dots")
        }
      }
    }
  }
}
