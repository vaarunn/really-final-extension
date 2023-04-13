
from transformers import AutoTokenizer, AutoModelForSequenceClassification   
import json

def is_obscene(text):
    # Load the Toxic BERT model
    tokenizer = AutoTokenizer.from_pretrained("Hate-speech-CNERG/dehatebert-mono-english")   
    model = AutoModelForSequenceClassification.from_pretrained("Hate-speech-CNERG/dehatebert-mono-english")

    # Tokenize the input string using the tokenizer
    inputs = tokenizer.encode_plus(text, add_special_tokens=True, return_tensors="pt")

    # Run the input through the model to get a prediction
    outputs = model(inputs["input_ids"], token_type_ids=None, attention_mask=inputs["attention_mask"])
    predictions = outputs.logits.softmax(dim=-1)

    # Check the output of the model to see if the string is obscene or not
    if predictions[0][1] > 0.5:
        return True
    else:
        return False

with open('content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

if is_obscene(data):
    print("true")
else:
    print("false")