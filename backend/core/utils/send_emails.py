import logging
from django.core.mail import EmailMessage, send_mail, EmailMultiAlternatives
from django.conf import settings
from django.template.loader import get_template


logger = logging.getLogger(__name__)

def send_custom_mail(subject, receivers, template, context):
    """This function is used to send all custom email with an html body."""

    try:
        # Construct the email to send
        message = get_template(template).render(context)

        print("#################  CHECK MAIL SENT  #####################")
        print(message)

        email = EmailMultiAlternatives(
            subject = subject,
            text_content = message,
            from_email = settings.EMAIL_HOST_USER,
            to= receivers
        )

        email.content_subtype = "html"
        email.fail_silently = True
        email.send()
        # #email.attach_file()

        return True

    except Exception as e:
        logger.error(e)

    return False
