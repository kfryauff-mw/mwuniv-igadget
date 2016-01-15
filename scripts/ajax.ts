 match($path) {
   # Match the Ajax path
   with(/category/) {
    # Tritium I want to run on Ajax content with "category" in the URL.
   }
   with(/product/) {
    # Tritium I want to run on Ajax content with "product" in the URL.
   }
   else() {
    log("This Ajax content is unrecognized")
   }
 }

# needed for product images
# replace("%24", "$")
# replace("&amp;", "&")
