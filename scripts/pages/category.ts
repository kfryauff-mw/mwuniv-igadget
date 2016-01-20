$("./body"){
  add_class("_category");
  remove(".//div[@id='CategoryBreadcrumb']")
  remove(".//div[@class='Right']")

  $(".//div[@id='Wrapper']") {
    $("./div[@class='Left']") {
      $("./div[not(contains(@style, 'display:none')) and (@id='SideShopByBrand' or @id='SideCategoryShopByPrice')]") {

        $style = fetch("@style")
        log("style: ", $style)

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
    $("./div[contains(@class, 'Content')]") {
      $("./div[@id='CategoryHeading']") {
        remove(".//div[@class='SubCategoryList']")
        $("./div[@class='BlockContent']") {
          # Move page title on top of the content area
          $("./h2") {
            move_to("../../../../div[@class='Left']", "top")
          } # End h2
          $("./div[@class='FloatRight SortBox']") {
            $("./form") {
              wrap_text_children("span")
            } # End form
          } # End div.FloatRight.SortBox
        } # End div.BlockContent
      } # End div#CategoryHeading

      $("./div[@id='CategoryContent']") {
        remove(".//div[@class='CompareButton']")
        $(".//li") {
          attribute("style") { remove() }
          insert_at("bottom", "div", class: "ProductSummary")
          $("./div[@class='ProductCompareButton']") {
            remove()
          }
          $("./div[not(contains(@class, 'ProductSummary') or contains(@class, 'ProductImage'))]") {
            move_to("../div[@class='ProductSummary']")
          } # End not(div.ProductSummary || div.ProductImage
        } # End li
      } # End div#CategoryContent
    } # End div.Content



  } # End of #Wrapper scope

}
