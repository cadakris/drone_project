import ssl
import certifi
from django.core.mail.backends.smtp import EmailBackend

class CustomEmailBackend(EmailBackend):
    def __init__(self, *args, **kwargs):
        kwargs['ssl_context'] = ssl.create_default_context(cafile=certifi.where())
        super().__init__(*args, **kwargs)