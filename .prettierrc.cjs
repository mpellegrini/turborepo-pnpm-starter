// Documentation for this file: https://prettier.io/docs/en/configuration.html
module.exports = {
  // Extend the line length that the printer will wrap on beyond the default of 80.
  printWidth: 100,

  // Use .gitattributes to manage newlines
  endOfLine: 'auto',

  // Use single quotes instead of double quotes.
  singleQuote: true,

  // Trailing commas wherever possible (including function parameters and calls).
  trailingComma: 'all',

  // Only add semicolons at the beginning of lines that may introduce ASI failures.
  semi: false,

  // Indent the code inside <script> and <style> tags in Vue files.
  vueIndentScriptAndStyle: true,

  // Enforce single attribute per line in HTML, Vue and JSX.
  singleAttributePerLine: true,
}
