from flask import Flask, render_template, redirect, url_for,request

def getColors():
    return [["#e59400","ffa500", "#ffa500", "#ffae19", "#ffb732", "#ffc04c", "#ffd27f", "#ffe4b2", "#000000"], ["#444", "#930281", "#2200ff"]]
