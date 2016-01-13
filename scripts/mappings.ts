/*
  NEW Mappings

  PLEASE SEE: page_type.ts to define the $page_type variable first!

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {
  match($page_type) {
    with(/^home$/) {
      log("--> Home Page Load")
      @import pages/home.ts
    }
    else() {
    }
  }
  match($path) {
    with(/shop/){
      log("--> Importing pages/category.ts in mappings.ts")
      @import pages/category.ts
    }
    else() {
    }
  }
}
