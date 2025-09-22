from flask import Flask, render_template

app = Flask(__name__)

# Portfolio data structure
portfolio_data = {
    'name': 'L. Shriver',
    'title': 'Data Specialist & STEM Educator',
    'location': 'Virginia, USA',
    'email': 'lshriver@protonmail.com',
    'linkedin': 'linkedin.com/in/lshriver',
    'github': 'github.com/lshriver',
    'badges': ['Remote-first', 'AI Training', 'Computational Biology'],
    'summary': 'Remote-first data specialist and STEM educator with a graduate background in computational biology and neuroscience. Experienced in asynchronous project work including AI model training, math content development, and scientific analysis. Skilled at translating complex topics into accessible insights for both learners and machines.',
    'core_competencies': [
        'Asynchronous collaboration',
        'Scientific writing & research',
        'Interdisciplinary problem-solving'
    ],
    'technical_skills': {
        'programming': ['Python', 'MATLAB', 'HTML/CSS'],
        'tools': ['LaTeX', 'Markdown', 'Git'],
        'ai_ml': ['Model Training', 'Prompt Engineering', 'LLM Evaluation'],
        'education': ['STEM Problem Solving', 'Study Assistance', 'Mentoring']
    },
    'interests': [
        'Synchronization phenomena',
        'Statistical mechanics',
        'Causal inference & neuroscience',
        'Biochemical kinetics'
    ],
    'experience': [
        {
            'title': 'AI Trainer — Chemistry & Mathematics',
            'company': 'Aligned',
            'location': 'Remote',
            'period': 'Jan 2025 – Present',
            'type': 'current',
            'responsibilities': [
                'Designed and curated graduate-level chemistry problems for machine learning evaluation',
                'Collaborated asynchronously to improve LLM scientific accuracy'
            ]
        },
        {
            'title': 'AI Trainer — Mathematics',
            'company': 'Outlier',
            'location': 'Remote',
            'period': 'Feb 2024 – Present',
            'type': 'current',
            'responsibilities': [
                'Generated prompts and rubrics to evaluate and enhance model performance in advanced mathematics',
                'Applied pedagogical strategies to refine LLM comprehension'
            ]
        },
        {
            'title': 'Freelance Consultant — STEM Content & AI Evaluation',
            'company': 'Various Clients',
            'location': 'Remote',
            'period': '2022 – Present',
            'type': 'current',
            'responsibilities': [
                'Delivered contract-based projects in math/science education, AI output testing, and technical content writing',
                'Emphasized clarity, autonomy, and flexibility in async workstreams'
            ]
        },
        {
            'title': 'Tutor',
            'company': 'Varsity Tutors',
            'location': 'Remote',
            'period': 'Sep 2022 – Present',
            'type': 'current',
            'responsibilities': [
                'Coached students in discrete math, calculus, probability, neuroscience, physics, and linear algebra',
                'Customized sessions to meet individual learning styles in remote settings'
            ]
        },
        {
            'title': 'Research Assistant',
            'company': 'College of William & Mary',
            'location': 'Williamsburg, VA',
            'period': 'Jan 2016 – May 2017',
            'type': 'past',
            'responsibilities': [
                'Applied MATLAB and graph-theory analyses to enzyme-kinetics and receptor-allostery simulations'
            ]
        }
    ],
    'education': [
        {
            'degree': 'M.S. Computational Biology',
            'school': 'College of William & Mary',
            'location': 'Williamsburg, VA',
            'period': '2016 – 2017'
        },
        {
            'degree': 'B.S. Neuroscience, Psychology & Chemistry',
            'school': 'Christopher Newport University',
            'location': 'Newport News, VA',
            'period': '2009 – 2015'
        }
    ],
    'projects': [
        {
            'title': 'Professional Portfolio',
            'description': 'Interactive showcase of projects and skills',
            'url': 'https://lshriver-portfolio.replit.app/',
            'type': 'portfolio'
        },
        {
            'title': 'Jupyter Notebook Collection',
            'description': 'Data analysis and computational projects',
            'url': 'https://github.com/lshriver/scribing',
            'type': 'github'
        }
    ]
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

if __name__ == '__main__':
    app.run(debug=True)