from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the students from the JSON file or create an empty list if the file does not exist
try:
    with open('students.json', 'r') as f:
        students = json.load(f)
except:
    students = []

# Create a student
@app.route('/student', methods=['POST'])
def add_student():
    data = request.get_json()
    students.append(data)
    with open('students.json', 'w') as f:
        json.dump(students, f)
    return jsonify({'message': 'Student added successfully'}), 201

# Read all students
@app.route('/student', methods=['GET'])
def get_students():
    return jsonify(students), 200

# Read a student by email
@app.route('/student/<string:email>', methods=['GET'])
def get_student(email):
    student = next((s for s in students if s['email'] == email), None)
    if student:
        return jsonify(student), 200
    else:
        return jsonify({'message': 'Student not found'}), 404

# Update a student by email
@app.route('/student/<string:email>', methods=['PUT'])
def update_student(email):
    data = request.get_json()
    student = next((s for s in students if s['email'] == email), None)
    if student:
        student.update(data)
        with open('students.json', 'w') as f:
            json.dump(students, f)
            f.close()
        return jsonify({'message': 'Student updated successfully'}), 200
    else:
        return jsonify({'message': 'Student not found'}), 404

# Delete a student by email
@app.route('/student/<string:email>', methods=['DELETE'])
def delete_student(email):
    student = next((s for s in students if s['email'] == email), None)
    if student:
        students.remove(student)
        with open('students.json', 'w') as f:
            json.dump(students, f)
            f.close()
        return jsonify({'message': 'Student deleted successfully'}), 200
    else:
        return jsonify({'message': 'Student not found'}), 404

#add a mark to a student
@app.route('/mark/<string:email>', methods=['PUT'])
def add_mark(email):
    data = request.get_json()
    student = next((s for s in students if s['email'] == email), None)
    if student:
        student.update(data)
        with open('students.json', 'w') as f:
            json.dump(students, f)
            f.close()
        return jsonify({'message': 'Student updated successfully'}), 200
    else:
        return jsonify({'message': 'Student not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
