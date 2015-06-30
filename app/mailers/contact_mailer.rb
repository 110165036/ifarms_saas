class ContactMailer < ActionMailer::Base
  default to: '110165036@umt.edu.pk' 
  
  def contact_email(name, email, body)
    @name = name
    @email = email
    @body = body
    mail(from: email, subject: 'Contact Form Message')
  end
end