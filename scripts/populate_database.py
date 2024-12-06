import datetime
import random
import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("serviceAccount.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://upx-6-f2b65-default-rtdb.asia-southeast1.firebasedatabase.app'  
})

root_ref = db.reference('')

num_readings = 100

intervalo_minutos = 60

current_time = datetime.datetime.now()

umidade_solo = 0.55
umidade_ar = 0.60
temperatura = 27.0
nivel_reservatorio = 0.75

def variar_valor(valor, min_delta=-0.1, max_delta=0.1):
    return valor + random.uniform(min_delta, max_delta)

for i in range(num_readings):
    timestamp_iso = (current_time.isoformat().split('.')[0] + "Z")

    reading_data = {
        "umidadeSolo": round(umidade_solo, 2),
        "umidadeAr": round(umidade_ar, 2),
        "temperatura": round(temperatura, 2),
        "nivelReservatorio": round(nivel_reservatorio, 2)
    }

    root_ref.child(timestamp_iso).set(reading_data)
    print(f"Inserido: {timestamp_iso} => {reading_data}")

    current_time += datetime.timedelta(minutes=intervalo_minutos)

    umidade_solo = variar_valor(umidade_solo)
    umidade_ar = variar_valor(umidade_ar)
    temperatura = variar_valor(temperatura, min_delta=-1, max_delta=1)
    nivel_reservatorio = variar_valor(nivel_reservatorio)
