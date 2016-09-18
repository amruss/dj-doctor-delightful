from flask import Flask, render_template, redirect, url_for,request
import importlib

scripts = ["temporary", "temporary", "temporary"] //TODO: 

def routeScripts(index):
    print("changing indexes" + str(index))
    script = importlib.import_module(scripts[index % len(scripts)], None)
    return script.getColors()
