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
        wrap("div", data-ur-set: "carousel", data-ur-fill: "2", data-ur-infinite: "disabled", data-ur-center: "disabled")
        # wrap("div", data-ur-carousel-component: "scroll_container")
        attribute("data-ur-carousel-component", "scroll_container")
        $("./li") {
          attribute("data-ur-carousel-component", "item")
          attribute("alt", index())
          // Hacky fix for carousel
          attribute("style", "max-width: 160px;")

          $(".//div[contains(@class, 'ProductImage')]") {


            // remove('@style')
            // log('style =',fetch('@style'));

            // **** TODO: Remove QuickViewBtn ****
            // $(".//div[@class='QuickViewBtn']") {
            //   inner("to delete")
            // }
            // remove(".//div[contains(@class, 'QuickViewBtn')]")
          }

        }
        $("parent::node()") {
          insert_at("bottom", "div", class: "dots", data-ur-carousel-component: "dots")
        }
      }
    }
  }
}
