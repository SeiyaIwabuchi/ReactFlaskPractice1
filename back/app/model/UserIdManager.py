from . import DAO
class UserIdManager:
    @staticmethod
    def getNextId():
        nextId = DAO.getNextUserId()
        DAO.incrementUserId()
        return nextId

    @staticmethod
    def getNextIdWithoutincrement():
        nextId = DAO.getNextUserId()
        return nextId