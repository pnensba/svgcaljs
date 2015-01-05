import pico

def hello(s):
    f = file('test.svg','w')
    f.write(s)
    f.close()
    print "lkjlkj"
    return "Hello World"
