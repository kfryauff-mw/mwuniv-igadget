$("./body") {
  add_class("_product");

  remove(".//div[@id='ModalContainer']")

  $("./div[@id='Container']") {
    $("./div[@id='Outer']") {
      $("./div[@id='Wrapper']") {

        # Remove Left and Right Columns
        remove("./div[@class='Left']")
        remove("./div[@class='Right']")

        $("./div[@class='Content']") {
          # Remove Unnecessary Info from Content
          remove(".//div[contains(@id, 'ProductBreadcrumb')]")
          remove(".//a[@id='ImageScrollNext']")
          remove(".//div[@id='SimilarProductsByCustomerViews']")
          remove(".//div[@id='ProductByCategory']")
          remove(".//div[@id='ProductReviews']/a")

          $(".//div[@class='BulkDiscount']/input") {
            attribute("src") { remove() }
            attribute("type", "submit")
            attribute("value", "Add to Cart")
          }
        } # End .Content

      } # End #Wrapper
    } # End #Outer
  } # End  #Container
} # End body
