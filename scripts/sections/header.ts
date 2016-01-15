
$(".//div[@id='Header']") {
  attribute("data-ur-set", "toggler")
  $("./div[@id='Logo']") {
    # Move top menu into #logo container
    move_here("../../../div[@id='TopMenu']", "bottom") {
      # Remove unwanted top menu items from upper menu
      remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
      # Create Accounts Button

      $(".//ul") {
        attribute("reversed", "reversed")
        move_here("./li[@class='First']", "bottom") {
          $("./a") {
            inner("")
            insert("div", class: "mw_menu_btn sprites-user")
          }

        }
        $(".//li[@class='CartLink']/a") {
          inner("")
          insert("div", class: "mw_menu_btn sprites-cart")

        }
      }
    }
  }

  remove(".//br[@class='Clear']")

  # Create bottom of header (Search and Menu Area)
  insert("div", class: "mw_header_bottom") {
    insert("div", class: "mw_search")
    insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
  } // End .mw_header_bottom scope


  # Fill search HTML
  $("..//div[@class='mw_search']") {
    # Move search form into container element
    move_here("//div[@id='SearchForm']", "bottom") {
      remove("./p")
      $("./form") {
        remove("./label")
        # Change search button bg image
        $("./input[@type='image']") {
          wrap("div", class: "mw_search_btn sprites-search")
          attribute("style", "opacity:0;")
        }
        $("./input[@type='text']") {
          attribute("placeholder", "Search ...")
        }
      }
    } // End #SearchForm scope
  } // End .mw_search scope

  # Create Menu Dropdown Area
  move_here("../div[@id='Menu']", "bottom") {
    attribute("data-ur-toggler-component", "content")
    # Move "Category List" element on bottom of #Menu element
    move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
    $$("li") {
      add_class("mw_bar2")
    }
  } // End #Menu scope

  // insert("div", data-ur-set: "toggler") {
  //   insert("div", data-ur-toggler-component: "button"){
  //     inner("Click Here!")
  //   }
  //   insert("ul", data-ur-toggler-component: "content"){
  //     insert("li") { inner("Hat") }
  //     insert("li") { inner("Hat") }
  //     insert("li") { inner("Hat") }
  //   }
  // }

}
