

#include <string.h>
#include <fnmatch.h>

#include <string>
#include <iostream>
#include <map>
#include <vector>
#include <fstream>

#include <json/json.h>


#include <microhttpd.h>


using namespace std;

class Binawatch_webservices {

	public:
		static struct Binawatch_shared_data *shared_data;
		static int url_router( struct MHD_Connection *connection, const char* url , string &str_response );
		static void get_allBookTickers( string &str_response );
		static void get_account( string &str_response );
		static void register_account( string &str_response, string &username , string &password ) ;
};


