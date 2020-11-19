from .DAO import getNextId,incrementId
class IdManager:
    @staticmethod
    def getNextId():
        nextId = getNextId()
        incrementId()
        return nextId

    @staticmethod
    def getNextIdWithoutincrement():
        nextId = getNextId()
        return nextId