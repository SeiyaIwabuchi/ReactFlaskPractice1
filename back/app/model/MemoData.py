class MemoData:
    def __init__(self):
        self._title = ""
        self._body = ""
    
    def setTitle(self,text:str):
        self._title = text
    
    def setBody(self,text:str):
        self._body = text

    def getTitle(self) -> str:
        return self._title

    def getBody(self) -> str:
        return self._body