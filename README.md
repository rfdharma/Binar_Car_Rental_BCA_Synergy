<h1 align="center">Car Management Dashboard</h1>

<h2 align="center">Entity Relationship Diagram</h2>
<p align="center">
  Logical ERD
  <img width="460" height="300" src="https://i.ibb.co/QDqdBrg/logical-erd-car.png">
</p>
<p align="center">
  Physical ERD
  <img width="460" height="300" src="https://i.ibb.co/sVRb2Hb/conceptual-erd-car.jpg" alt="conceptual-erd-car">
</p>

## Get All Cars
```[ENDPOINT] /cars```
```url
[GET] http://localhost:4000/cars
```

#### Sample Response
```json
{
    "status": 200,
    "message": "Data mobil berhasil didapatkan.",
    "data": [
        {
            "id": 48,
            "name": "P3",
            "price": "54.00",
            "size": "Small",
            "image": "https://res.cloudinary.com/dguyyz3rj/image/upload/v1699537564/y9gy9rtq1iz7wuqsqymq.png",
            "created_at": "2023-11-09T13:45:53.744Z",
            "updated_at": "2023-11-09T13:45:53.744Z"
        },
        {
            "id": 46,
            "name": "X3 Max",
            "price": "424.00",
            "size": "Medium",
            "image": "https://res.cloudinary.com/dguyyz3rj/image/upload/v1699537353/b4a2ymovagqllxxotg9e.png",
            "created_at": "2023-11-09T13:42:22.337Z",
            "updated_at": "2023-11-09T13:42:22.337Z"
        },
        ...
    ]
}
```

## Get Cars By Size
```[ENDPOINT] /cars?size=${size}```
```url
[GET] http://localhost:4000/cars?size=${size}
```

#### Sample Request
```json
{
  "size": "Small"
}
```

#### Sample Response
```json
{
    "status": 200,
    "message": "Data mobil berhasil didapatkan.",
    "data": [
        {
            "id": 48,
            "name": "P3",
            "price": "54.00",
            "size": "Small",
            "image": "https://res.cloudinary.com/dguyyz3rj/image/upload/v1699537564/y9gy9rtq1iz7wuqsqymq.png",
            "created_at": "2023-11-09T13:45:53.744Z",
            "updated_at": "2023-11-09T13:45:53.744Z"
        },
        {
            "id": 46,
            "name": "X3 Max",
            "price": "424.00",
            "size": "Small",
            "image": "https://res.cloudinary.com/dguyyz3rj/image/upload/v1699537353/b4a2ymovagqllxxotg9e.png",
            "created_at": "2023-11-09T13:42:22.337Z",
            "updated_at": "2023-11-09T13:42:22.337Z"
        },
        ...
    ]
}
```

## Create Car
```[ENDPOINT] /cars/create```
```url
[POST] http://localhost:4000/cars/create
```

#### Sample Request
```json
{
  "name": "Toyota Kijang Innova",
  "price": 350000000,
  "size": "Medium",
  "image": "/path/to/image.jpg"
}
```

#### Sample Response
```json
{
  "status": 200,
  "message": "Data mobil berhasil ditambahkan.",
  "data": {
    "id": 4,
    "name": "Toyota Kijang Innova",
    "price": 350000000,
    "size": "Medium",
    "image": "https://res.cloudinary.com/my-cloudinary-account/image/upload/secure_url/my-image.jpg"
  }
}
```

## Update Car
```[ENDPOINT] /cars/edit/{id}```
```url
[PUT] http://localhost:4000/cars/edit/{id}
```

#### Sample Request
```json
{
  "name": "Toyota Kijang Innova",
  "price": 350000000,
  "size": "Small",
  "image": "/path/to/image2.jpg"
}

or

{
  "name": "Toyota Kijang Innova",
  "price": 350000000,
  "size": "Small",
}
```


#### Sample Response
```json
{
    "status": 200,
    "message": "Data mobil berhasil diupdate."
}
```

## Delete Car
```[ENDPOINT] /cars/delete/{id}```
```url
[DELETE] http://localhost:4000/cars/delete/{id}
```

#### Sample Request
```json
{
  "id": 1
}
```

#### Sample Response
```json
{
    "status": 200,
    "message": "Data mobil berhasil dihapus."
}
```

<br/>

#### Created by @rfdharmaa
