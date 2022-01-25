docker build -t payara-demo .
docker tag omdb-demo iad.ocir.io/tuxtor/microprofile/omdb-demo:latest
docker push iad.ocir.io/tuxtor/microprofile/omdb-demo


ssh opc@129.213.109.175

docker run -p 8080:8080 --name omdb-demo -e omdbremote.url=http://www.omdbapi.com/?apikey=a3804773  iad.ocir.io/tuxtor/microprofile/omdb-demo