import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firestore DB
cred = credentials.Certificate('config/serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()