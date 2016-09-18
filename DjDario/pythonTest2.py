from flask import Flask, render_template, redirect, url_for,request

def getColors():
    return [["#fff", "#000"], ["#444", "#930281", "#2200ff"]]
