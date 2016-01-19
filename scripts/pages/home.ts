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
        wrap("div", data-ur-set: "carousel", data-ur-fill: "2.5")
        # wrap("div", data-ur-carousel-component: "scroll_container")
        attribute("data-ur-carousel-component", "scroll_container")
        $("./li") {
          attribute("data-ur-carousel-component", "item")
          attribute("alt", index())
          $(".//div[contains(@class='ProductImage'])") {
            // $("./a") {
            //   insert_at("top", "span", class: "vert_align_helper")
            // }
          }
        }
        $("parent::node()") {
          insert_at("top", "a", "Next", data-ur-carousel-component: "button", data-ur-carousel-button-type: "next")
          insert_at("top", "   /    ")
          insert_at("top", "a", "Prev", data-ur-carousel-component: "button", data-ur-carousel-button-type: "prev")
          insert_at("bottom", "div", class: "dots", data-ur-carousel-component: "dots")
        }
      }
    }

    // insert("div", data-ur-set: "carousel") {
    //   insert("span", data-ur-carousel-component: "count")
    //   insert("a", "Prev", data-ur-carousel-component: "button", data-ur-carousel-button-type: "prev")
    //   insert("a", "Next", data-ur-carousel-component: "button", data-ur-carousel-button-type: "next")
    //   insert("div", data-ur-carousel-component: "scroll_container") {
    //     insert("img", data-ur-carousel-component: "item", src: "http://placehold.it/150x210", alt: "1")
    //     insert("img", data-ur-carousel-component: "item", src: "http://placehold.it/150x210", alt: "2")
    //     insert("img", data-ur-carousel-component: "item", src: "http://placehold.it/150x210", alt: "3")
    //     insert("img", data-ur-carousel-component: "item", src: "http://placehold.it/150x210", alt: "4")
    //   }
    // }
  }
}
