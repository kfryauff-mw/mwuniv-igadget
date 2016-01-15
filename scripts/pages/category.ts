$("./body"){
  add_class("_category");


  $(".//div[@id='Wrapper']") {
    $("./div[@class='Left']") {

      $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
        attribute("data-ur-set", "toggler")

        $(".//h2") {
          add_class("mw_bar1");
          attribute("data-ur-toggler-component", "button")
          insert("div", class: "mw_indicator")
        }

        $("./div") {
          attribute("data-ur-toggler-component", "content")
          $(".//a") {
            insert("div", class: "mw_arrow");
          }
        }

      } # End of #SideShopByBrand scope

      remove(".//div[contains(@class, 'NewsletterSubscription')]")

    } # End of .Left scope

    # Adjusting for Styling Purposes
    $("./div[@class='Content ']") {
      $("./div[@id='CategoryHeading']") {
        $("./div[@class='BlockContent']") {
          # Move page title on top of the content area
          $("./h2") {
            move_to("../../../../div[@class='Left']", "top")
          }
          $("./div[@class='FloatRight SortBox']") {
            $("./form") {
              wrap_text_children("span")
            }
          }
        }
      }
    }
  } # End of #Wrapper scope

}
