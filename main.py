from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    number: int


@app.post("/bark")
def bark(item: Item):
    if item.number <=0:
        raise HTTPException(status_code=400, detail="意地悪！！")
    return {"result": "ワン" * item.number}
