export const sendToWhatsApp = (formData: any) => {
  const message = `*New Admission Application*

*Child Information:*
Name: ${formData.childName}
Age: ${formData.age || formData.childAge}

*Parent Information:*
Name: ${formData.parentName}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}

${formData.notes || formData.medicalConditions ? `*Additional Notes:*\n${formData.notes || formData.medicalConditions}` : ''}

*Application submitted on:* ${new Date().toLocaleString()}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "919415410801"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};