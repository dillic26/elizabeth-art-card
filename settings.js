/* Edit this file to change the descriptions, buttons, links and contact information.
   Set show:false to hide a button. Add another object to add a button.
   Icons are hidden. Each button uses an actual transparent PNG paint stroke.
   Set stroke to email, phone, instagram, portfolio, facebook or save-contact.
*/
window.ELIZABETH_CARD = {
  titles: ['Mixed Media Artist', 'Art Quilter', 'Painter'],
  contact: {
    name: 'Elizabeth Dillinger',
    email: 'elizabeth@dillinger.ca',                                         // Example: elizabeth@dillinger.ca
    phone: '+14166024705',                                                   // Example: +14166024705
    facebook: 'https://www.facebook.com/elizabethdillingerstudio/',
    instagram: 'https://www.instagram.com/dillinger.elizabeth/',             // Example: https://instagram.com/yourname
    website: 'https://elizabeth511.wixsite.com/creative'                     // Example: https://yourportfolio.com
  },
  buttons: [
    { label: 'Email', icon: 'email', stroke: 'email', action: 'email', show: true },
    { label: 'Phone', icon: 'phone', stroke: 'phone', action: 'phone', show: true },
    { label: 'Facebook', icon: 'facebook', stroke: 'facebook', action: 'facebook', show: true }, // Enter your Facebook page URL
    { label: 'Instagram', icon: 'instagram', stroke: 'instagram', action: 'instagram', show: true },
    { label: 'Art Portfolio', icon: 'portfolio', stroke: 'portfolio', action: 'website', show: true },
    { label: 'Save Contact', stroke: 'save-contact', action: 'save', show: true }
  ]
};
