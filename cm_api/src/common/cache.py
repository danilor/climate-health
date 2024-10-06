from flask_caching import Cache

# Initialize the cache without attaching it to any specific app
cache = Cache(config={"CACHE_TYPE": "SimpleCache"})
