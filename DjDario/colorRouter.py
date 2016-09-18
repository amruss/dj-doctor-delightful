from flask import Flask, render_template, redirect, url_for,request
import importlib

scripts = ["pythonTest", "pythonTest2"]

def routeScripts(index):
    script = importlib.import_module(scripts[index % len(scripts)], None)
    return script.getColors()
