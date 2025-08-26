from flask import jsonify, request, Blueprint
from ..models import Notes
from ..extensions import db

app_bp = Blueprint('app', __name__)

'''Complete Route for this File will be https/.../api/app/rotue_name'''

@app_bp.route('/home')
def get_all_notes():
    try:
        notes = Notes.query.all()
        notes_list = [{"id":n.id, "title":n.title, "content":n.content, "created_at":n.created_at} for n in notes]
        return jsonify({'message':'sucessfully fetched data from the database',
                       'notes':notes_list}), 200
    
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