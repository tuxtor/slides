
java -jar -Domdbremote.url=http://www.omdbapi.com/?apikey=a3804773 ~/JavaLibs/payara-micro-5.183.jar --nocluster --deploy target/omdb-demo.war
java -jar ~/JavaLibs/payara-micro-5.184.jar --nocluster --deploy target/payara-demo.war --autoBindHttp

docker run -p 8080:8080 --name omdb-demo -e omdbremote.url=http://www.omdbapi.com/?apikey=a3804773  omdb-demo


docker run -d --name database -e POSTGRES_PASSWORD=informatica -e POSTGRES_DB=movies2 postgres
docker run -p 81:8080 --link database:database --name payara-demo payara-demo


docker run --name database -e POSTGRES_PASSWORD=informatica -e POSTGRES_DB=movies2 postgres
docker run -p 8080:8080 --name omdb-demo -e omdbremote.url=http://www.omdbapi.com/?apikey=a3804773  omdb-demo
docker run -p 8081:8080 --link database:database --link omdb-demo:omdb-demo \
    -e omdbservice=http://omdb-demo:8080/omdb-demo/rest/omdb/ \
    --name payara-demo payara-demo

docker run -p 8081:8080 --link database:database --link omdb-demo:omdb-demo \
    -e omdbservice=http://129.213.109.175:8080/omdb-demo/rest/omdb/ \
    --name payara-demo payara-demo


docker tag payara-demo iad.ocir.io/tuxtor/microprofile/payara-demo:1



