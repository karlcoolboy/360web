var APP_DATA = {
  "scenes": [
    {
      "id": "0-720yun_demo_panorama",
      "name": "720yun_demo_panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.059276219899599525,
        "pitch": -0.0019150674281736002,
        "fov": 1.5643552045101847
      },
      "linkHotspots": [
        {
          "yaw": -1.4986817275800153,
          "pitch": -0.08885173633348309,
          "rotation": 5.497787143782138,
          "target": "1-field"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.579253773952317,
          "pitch": -0.028149877971767268,
          "title": "hh <br>",
          "text": "ceshi"
        }
      ]
    },
    {
      "id": "1-field",
      "name": "field",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7443569407059165,
          "pitch": -1.4880138568198458,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
