require 'nokogiri'
require 'pry'
require 'open-uri'
require_relative '../app/models/article.rb'
require_relative '../app/models/place.rb'
require 'json'

  doc_link = open("http://www.grubstreet.com/bestofnewyork/the-absolute-best-poutine-in-nyc.html")
  nokogiri_doc = Nokogiri::HTML(doc_link)
  list_array = nokogiri_doc.css(".directory-entry")
  list_array[8..-1].each_with_index do |list_item,art_index|

    list_hash = {url: list_item.children[1].values[1],
                 title: list_item.children.children.text}
    @article = Article.create(url:list_hash[:url], title:list_hash[:title], img:"")
    place_doc_link = open(@article.url)
    # place_doc_link = open("http://www.grubstreet.com/bestofnewyork/best-baguette-nyc.html")
    nokogiri_doc = Nokogiri::HTML(place_doc_link)

    @article.update(img:nokogiri_doc.css(".img-data")[1].values[1])
    nokogiri_doc.css(".img-data")
    place_info = nokogiri_doc.css(".clay-paragraph")[6..-1].each_with_index do |place,index|


      place_hash = {name:"", address:"", description:"", article_id:@article.id}
      if index == 0
        @article.update(description: place.children.text)
      else
        if place.children[0].name != "i"
          if index % 2 != 0
            # byebug
            #namebug
            name = place.children[0].children.text
            regex_match = (/\d*\W/ =~ name)
            if (regex_match == 0) && (name.length < 4)
              # byebug
              name = place.children[1].children.text
              if name == ""
                name = place.children[2].children.text
              end
            end
            place_hash[:name] = name
            # byebug
            #addressbug
            address_array = []
            if place.children.last.text.length<100
              address_array = place.children.last.text.split(/[\,;]/)
            else
              address_array = place.children[place.children.length-2].text.split(/[\,;]/)
            end
              if address_array.length == 4
                place_hash[:address] = [address_array[0], address_array[2]].join("")
              elsif address_array.length == 3
                place_hash[:address] = [address_array[0], "New York City"].join(" ")
              else
                place_hash[:address] = place_hash[:name] + ", New York City"
              end
              # byebug
              #descriptionbug
            description = nokogiri_doc.css(".clay-paragraph")[index+1].children.text

            if description.length<100
              place_hash[:description] = place.children.text
            else
              place_hash[:description] = description
            end

            @place = Place.create(place_hash)
          end
        end
      end
    end
  end


# Article.create(url:"http://www.grubstreet.com/bestofnewyork/best-24-hour-restaurants-nyc.html", title:"The Absolute Best 24-Hour Restaurants in New York")
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Coppelia", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
# Place.create(name:"Veselka", address:"144 Second Ave New York", article_id: 1)
