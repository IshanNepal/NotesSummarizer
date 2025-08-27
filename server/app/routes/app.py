from flask import jsonify, request, Blueprint
from ..models import Notes
from ..extensions import db
import requests

app_bp = Blueprint('app', __name__)

'''Complete Route for this File will be https/.../api/app/rotue_name'''

@app_bp.route('/home')
def get_all_notes():
    try:
        notes = Notes.query.all()
        notes_list = [{"id":n.id, "title":n.title, "content":n.content, "created_at":n.created_at} for n in notes]
        return jsonify({'message':'sucessfully fetched data from the database','notes':notes_list}), 200
    
    except Exception as e:
        return jsonify({'message':'server error', 'error':str(e)}), 500
    
@app_bp.route('/add', methods=['POST'])
def post_notes():
    '''
    Json for this Route: 
    {
    "title": "My First Note",
    "content": "This is the content of my note. It can be as long as the user wants.",
    }
    '''
    try:
        data = request.json
        title = data['title']
        content= data['content']

        new_note = Notes(title=title, content=content)
        db.session.add(new_note)
        db.session.commit()
        return jsonify({'message':'sucessfully created a new note'}), 200
    
    except Exception as e:
        return jsonify({'message':'server error', 'error':str(e)}), 500
    
@app_bp.route('/gen_ai_note', methods=['POST'])
def generate_ai_note():
    try:
        data = request.json
        text = data['text']

        response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": "Bearer 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",
            "HTTP-Referer": "http://localhost:5173/", # Optional. Site URL for rankings on openrouter.ai.
            "X-Title": "Notes", # Optional. Site title for rankings on openrouter.ai.
        },
    json=({
        "model": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free", # Optional
        "messages": [
        {
            "role": "user",
            "content": f"Summarize the given text: {text} in simple and generic sentences create 3 bullet points for making the user understand."
        }
        ]
    }))
        data = response.json()
        return jsonify({'message': 'success', 'data': data}), 200

    except Exception as e:
        return jsonify({'message':'server error', 'error':str(e)}), 500

        

    