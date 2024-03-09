export class Slugify
{
  private static a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  private static b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  private static p = new RegExp(this.a.split('').join('|'), 'g');

  slugify(string: string)
  : string
  {
    return string.toLowerCase()
    // Replace spaces with -
    .replace(/\s+/g, '-')
    // Replace special characters
    .replace(Slugify.p, c => Slugify.b.charAt(Slugify.a.indexOf(c)))
    // Replace & with 'and'
    .replace(/&/g, '-and-')
    // Remove all non-word characters
    .replace(/[^\w\-]+/g, '')
    // Replace multiple - with single -
    .replace(/\-\-+/g, '-')
    // Trim - from start of text
    .replace(/^-+/, '')
    // Trim - from end of text
    .replace(/-+$/, '');
  }
}