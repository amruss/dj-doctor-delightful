def writePythonScript(text):
    file = open("temporary.py", "w")
    file.write(text)
    file.close()
