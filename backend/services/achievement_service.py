from database.models import Achievement, Task
from database.db import db


def unlock_first_task(user_id):

    completed = Task.query.filter_by(
        user_id=user_id,
        completed=True
    ).count()

    if completed >= 1:

        achievement = Achievement.query.filter_by(
            user_id=user_id,
            title="First Task"
        ).first()

        if achievement and not achievement.unlocked:

            achievement.unlocked = True

            db.session.commit()