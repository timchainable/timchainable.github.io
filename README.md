# Tacklbox Storefront Templates
These files use HTML template tags that are used to build the storefront using the Tacklbox javascript code that is embedded as a script into the partner website along with a snippet of code to configure the Tacklbox solution. The HTML files in this repo include HTML <template> tags that are used to dynamically populate products, prices, variants, etc. These files use Tacklbox-specific class and id names that are used by the scripts to generate the storefront interface. These must be present in any new variant of these files. There are two examples below along with associated style sheets.

1 store_summary.html
  Template that has a summary screen with product images that can be clicked through to the individual product and then added to the cart.
2 store_details.html
  Template that lists out products and allows adding to the cart directly from that initial list


Notes: 
  * The payment layout is in the process of changing to be driven through the settings that are configured in the Tacklbox backend and it will dynamically add and display the various payment methods and actions that are allowed on a per partner basis. 
  * Configuration of the positioning, timing, and other attributes for display on the partner's content is done in the Tacklbox backend
